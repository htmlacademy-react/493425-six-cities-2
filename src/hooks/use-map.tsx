import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { OfferCardType } from '../lib/types/offer-card';
import { ATTRIBUTION_COPY, LAYER_URL } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: OfferCardType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        zoom: offer.location.zoom
      });

      const layer = new TileLayer(
        LAYER_URL,
        {attribution: ATTRIBUTION_COPY}
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
