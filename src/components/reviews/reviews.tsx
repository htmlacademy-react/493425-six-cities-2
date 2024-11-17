import { ReviewType } from '../../lib/types/review';
import { ReviewFormValueType } from '../../lib/types/review-form-value';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type ReviewsProp = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: ReviewsProp): React.JSX.Element {
  function handleSubmitReview(value: ReviewFormValueType) {
    throw new Error(value.review);
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((r: ReviewType) => <Review key={r.id} review={r} />)}
      </ul>
      <ReviewForm onSubmitForm={handleSubmitReview} />
    </section>
  );
}

export default Reviews;
