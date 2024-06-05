import PropTypes from "prop-types";

function WeatherCard({ name, icon, weather, unit }) {
  return (
    <div className=" bg-white/20 border border-white/20 rounded-[40px] flex flex-col items-center justify-center py-2">
      <p className="font-bold text-xl">{name}</p>
      <img className="h-16 py-2" src={icon} />
      <p className="text-xl font-semibold">
        {weather}
        {unit}
      </p>
    </div>
  );
}

WeatherCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default WeatherCard;
