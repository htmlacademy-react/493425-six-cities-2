import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { ReviewType } from '../../lib/types/review';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { MAX_NUMBER_REVIEWS } from '../../const';

type ReviewsProp = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: ReviewsProp) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.slice(0, MAX_NUMBER_REVIEWS).map((r: ReviewType) => <Review key={r.id} review={r} />)}
      </ul>
      {isUserAuthorized && <ReviewForm />}
    </section>
  );
}

export default Reviews;
