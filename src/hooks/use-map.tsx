import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { ATTRIBUTION_COPY, LAYER_URL } from '../const';
import { OfferLocationType } from '../lib/types/offer-location';

function useMap(center: OfferLocationType): [Map | null, MutableRefObject<HTMLElement | null>] {
  const { latitude, longitude, zoom } = center || {};
  const mapRef = useRef(null);
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const centerMap = {
        lat: latitude,
        lng: longitude
      };

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
  }, [
    mapRef,
    latitude,
    longitude,
    zoom
  ]);

  return [map, mapRef];
}

export default useMap;
