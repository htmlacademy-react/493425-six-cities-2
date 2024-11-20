import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { PlaceOfferType } from '../lib/types/offer-card';
import { ATTRIBUTION_COPY, LAYER_URL } from '../const';

function useMap(offer: PlaceOfferType): [Map | null, MutableRefObject<HTMLElement | null>] {
  const mapRef = useRef(null);
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const center = offer && {
        lat: offer.location.latitude,
        lng: offer.location.longitude
      };
      const zoom = offer && offer.location.zoom;

      const instance = new Map(mapRef.current, {
        center,
        zoom
      });

      const layer = new TileLayer(
        LAYER_URL,
        {attribution: ATTRIBUTION_COPY}
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [
    mapRef,
    offer?.location.latitude,
    offer?.location.longitude,
    offer?.location.zoom
  ]);

  return [map, mapRef];
}

export default useMap;
