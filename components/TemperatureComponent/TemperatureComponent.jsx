import { getTemperatureData } from '@/lib/weather-info'
import React from 'react'
import Card from '../Card/Card';
import Image from 'next/image';

export default async function TemperatureComponent({ lat, lon }) {
  const { temp, feels_like } = await getTemperatureData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          width={80}
          height={80}
          alt="rain icon"
        />
        <h3 className="feature-title">{temp}°C</h3>
        <span className="feature-name">Feel like {feels_like}°C</span>
      </div>
    </Card>
  )
}
