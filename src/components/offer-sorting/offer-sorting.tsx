import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Sorting, SortingType } from '../../lib/types/sorting';
import { setSorting } from '../../store/action';
import { useOutsideClick } from '../../hooks/use-outside-click';

function OfferSorting(): React.JSX.Element {
  const { ref, isVisible, setIsVisible } = useOutsideClick(false);
  const sorting = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  function setCurrentSorting(s: SortingType) {
    dispatch(setSorting(s));
    setIsVisible(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsVisible((isOpened) => !isOpened)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx(
          'places__options',
          'places__options--custom',
          { 'places__options--opened': isVisible }
        )}
        ref={ref}
      >
        {
          Object.values(Sorting).map((s: SortingType) => (
            <li
              key={s}
              tabIndex={0}
              onClick={() => setCurrentSorting(s)}
              className={clsx(
                'places__option',
                { 'places__option--active': s === sorting }
              )}
            >
              {s}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default OfferSorting;
