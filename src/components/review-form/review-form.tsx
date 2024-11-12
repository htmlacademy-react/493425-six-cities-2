import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { ReviewFormValue } from '../../lib/types/types';

type ReviewFormProps = {
  onSubmitForm: (value: ReviewFormValue) => void;
};

const rates: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];

function ReviewForm({onSubmitForm}: ReviewFormProps): React.JSX.Element {
  const [value, setValue] = useState({
    review: '',
    rating: 0
  });

  function handleFieldChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newValue = {
      [fieldName]: fieldValue
    };
    setValue({
      ...value,
      ...newValue
    });
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(value);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rates.map((title, i) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={i + 1}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
