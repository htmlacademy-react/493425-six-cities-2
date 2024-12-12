import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { ReviewFormValueType } from '../../lib/types/review-form-value';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RATINGS } from '../../const';

const EMPTY_FORM = {
  review: '',
  rating: ''
};

type ReviewFormProps = {
  onSubmitForm: (value: ReviewFormValueType) => void;
};

function ReviewForm({onSubmitForm}: ReviewFormProps) {
  const [value, setValue] = useState<ReviewFormValueType>(EMPTY_FORM);

  const isValid = value.rating !== ''
    && value.review.length > MIN_COMMENT_LENGTH
    && value.review.length < MAX_COMMENT_LENGTH;

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newValue = {
      [fieldName]: fieldValue
    };
    setValue({
      ...value,
      ...newValue
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(value);
    setValue(EMPTY_FORM);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((title, i) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={i + 1}
              checked={Number(value.rating) === i + 1}
              id={`${i + 1}-star`}
              type="radio"
              onChange={handleFieldChange}
            />
            <label
              htmlFor={`${i + 1}-star`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={value.review}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
