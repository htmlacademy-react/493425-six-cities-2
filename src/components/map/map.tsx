import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import clsx from 'clsx';
import { memo, useEffect } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { useMap } from '../../hooks/use-map';
import markerIcon from '../../../public/img/pin.svg';
import markerIconActive from '../../../public/img/pin-active.svg';
import { OfferLocationType } from '../../lib/types/offer-location';
import { useAppSelector } from '../../hooks';
import { selectActiveOfferId } from '../../store/offer-data/offer-data.selectors';

type MapProps = {
  className: string;
  center: OfferLocationType;
  offers: PlaceOfferType [];
  height?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: markerIconActive,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({className, center, offers, height}: MapProps) {
  const { latitude, longitude, zoom } = center || {};
  const [map, mapRef] = useMap(center);
  const activeOfferId = useAppSelector(selectActiveOfferId);
  const noCenter = !center;

  useEffect(() => {
    if (!map || noCenter) {
      return;
    }

    map.setView([latitude, longitude], zoom);
  }, [
    map,
    noCenter,
    latitude,
    longitude,
    zoom
  ]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerLayer = layerGroup().addTo(map);
    offers.forEach((offer: PlaceOfferType) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      });

      marker
        .setIcon(
          offer.id === activeOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };

  }, [
    map,
    offers,
    activeOfferId
  ]);

  return (
    <section
      className={clsx(styles.map, className, 'map')}
      ref={mapRef}
      style={{height: height && `${height }px`}}
    />
  );
}

const MemoMap = memo(Map);
export default MemoMap;
