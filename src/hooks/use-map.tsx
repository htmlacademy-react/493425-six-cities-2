import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { ATTRIBUTION_COPY, LAYER_URL } from '../const';
import { OfferLocationType } from '../lib/types/offer-location';

function useMap(center: OfferLocationType): [Map | null, MutableRefObject<HTMLElement | null>] {
  const mapRef = useRef(null);
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const centerMap = center && {
        lat: center.latitude,
        lng: center.longitude
      };
      const zoom = center && center.zoom;

      const instance = new Map(mapRef.current, {
        center: centerMap,
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
  }, [ mapRef, center ]);

  return [map, mapRef];
}

export default useMap;
