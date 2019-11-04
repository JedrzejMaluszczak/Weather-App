import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Subject } from 'rxjs';

import { environment } from '../environments/environment';
import { DataTracker } from './data-tracker';
import { Forecast } from './forecast.interface';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  private _dayTemperature = new Subject<DataTracker>();
  dayTemperature$ = this._dayTemperature.asObservable();

  private _nightTemperature = new Subject<DataTracker>();
  nightTemperature$ = this._nightTemperature.asObservable();

  private _morningTemperature = new Subject<DataTracker>();
  morningTemperature$ = this._morningTemperature.asObservable();

  private _humidity = new Subject<DataTracker>();
  humidity$ = this._humidity.asObservable();

  private openWeatherUrl = 'http://api.openweathermap.org/data/2.5';

  constructor(private  http: HttpClient) {
  }

  async createStatistics(cityName: string, countryCode: string) {
    try {
      const forecast = await this.fetchForecast(cityName, countryCode);
      this.initializeDataTrackers(forecast);
    } catch (e) {
      window.alert(e.error.message || 'Connection failed');
    }
  }

  private fetchForecast(cityName: string, countryCode: string) {
    const params = new HttpParams()
      .set('q', `${cityName},${countryCode}`)
      .set('APPID', environment.apiKey)
      .set('cnt', '5')
      .set('units', 'metric');
    return this.http
      .get<Forecast>(`${this.openWeatherUrl}/forecast/`, { params })
      .toPromise();
  }

  private initializeDataTrackers(forecast: Forecast) {
    const dayTemperature = new DataTracker();
    const nightTemperature = new DataTracker();
    const morningTemperature = new DataTracker();
    const humidity = new DataTracker();

    const sunrise = new Date(forecast.city.sunrise * 1000);
    const sunset = new Date(forecast.city.sunset * 1000);

    forecast.list.forEach(record => {
      const date = new Date(record.dt_txt);
      humidity.insert(record.main.humidity);
      if (this.isNight(sunrise, sunset, date)) {
        nightTemperature.insert(record.main.temp);
      } else {
        dayTemperature.insert(record.main.temp);
        if (this.isMorning(sunrise, date)) {
          morningTemperature.insert(record.main.temp);
        }
      }
    });
    this._dayTemperature.next(dayTemperature);
    this._nightTemperature.next(nightTemperature);
    this._morningTemperature.next(morningTemperature);
    this._humidity.next(humidity);
  }

  private isMorning(sunrise: Date, date: Date) {
    const noon = new Date(sunrise);
    noon.setHours(12, 0, 0, 0);
    return date.getHours() > sunrise.getHours() && date.getHours() < noon.getHours();
  }

  private isNight(sunrise: Date, sunset: Date, date: Date) {
    return date.getHours() < sunrise.getHours()
      || date.getHours() > sunset.getHours();
  }
}
