import TemperatureComponent from "@/components/TemperatureComponent/TemperatureComponent";


export default function TemperaturePage({params: {location}, searchParams: {latitude, longitude}}) {
  return (
    <TemperatureComponent lat={latitude} lon={longitude}/>
  )
}
