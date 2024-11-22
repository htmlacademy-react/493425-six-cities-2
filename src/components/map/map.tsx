import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import { PlaceOfferType } from '../../lib/types/offer-card';
import useMap from '../../hooks/use-map';
import markerIcon from '../../../public/img/pin.svg';
import markerIconActive from '../../../public/img/pin-active.svg';
import { OfferLocationType } from '../../lib/types/offer-location';

type MapProps = {
  className: string;
  center: OfferLocationType;
  offers: PlaceOfferType [];
  selectedOfferId?: number;
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

function Map({className, center, offers, selectedOfferId, height}: MapProps): React.JSX.Element {
  const [map, mapRef] = useMap(center);

  useEffect(() => {
    if (!map || !center) {
      return;
    }

    map.setView([center.latitude, center.longitude], center.zoom);
  }, [map, center]);

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
          offer.id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };

  }, [map, offers, selectedOfferId]);

  return (
    <section
      className={clsx(styles.map, className, 'map')}
      ref={mapRef}
      style={{height: height && `${height }px`}}
    />
  );
}

export default Map;
