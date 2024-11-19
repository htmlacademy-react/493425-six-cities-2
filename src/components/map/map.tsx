import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Icon, layerGroup, Marker } from 'leaflet';
import { OfferCardType } from '../../lib/types/offer-card';
import useMap from '../../hooks/use-map';

type MapProps = {
  className: string;
  centerOffer: OfferCardType;
  offers: OfferCardType [];
  selectedOfferId?: number;
  height?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): React.JSX.Element {
  const {className, centerOffer, offers, selectedOfferId, height = 500} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, centerOffer);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView([centerOffer.location.latitude, centerOffer.location.longitude], centerOffer.location.zoom);
  }, [map, centerOffer]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerLayer = layerGroup().addTo(map);
    offers.forEach((offer: OfferCardType) => {
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
