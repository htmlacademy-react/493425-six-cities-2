import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { OfferDetailType } from '../../lib/types/offer-card';
import { ReviewType } from '../../lib/types/review';
import { ReviewFormValueType } from '../../lib/types/review-form-value';
import { ReviewRequestType } from '../../lib/types/review-request';
import { uploadOfferReviewAction } from '../../store/api-actions';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type ReviewsProp = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: ReviewsProp) {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const handleSubmitReview = (value: ReviewFormValueType) => {
    const uploadedReview: ReviewRequestType = {
      comment: value.review,
      rating: Number(value.rating),
      offerId: (offer as OfferDetailType).id
    };
    dispatch(uploadOfferReviewAction(uploadedReview));
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((r: ReviewType) => <Review key={r.id} review={r} />)}
      </ul>
      {isUserAuthorized && <ReviewForm onSubmitForm={handleSubmitReview} />}
    </section>
  );
}

export default Reviews;
