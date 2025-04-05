import { isFutureEvent, isPastEvent, isPresentEvent } from './utils.js';

const CITIES = ['Berlin', 'Stuttgart', 'Minsk', 'Köln', 'London', 'Lissabon', 'Irkutsk', 'Sydney'];
const EVENT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const OFFERS = ['Rent a car', 'Add luggage', 'Add breakfast', 'Switch to business', 'Upgrade to business class'];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.startDatetime)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentEvent(point.startDatetime, point.endDatetime)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastEvent(point.endDatetime))
};

export { CITIES, EVENT_TYPES, DESCRIPTIONS, OFFERS, filter };
