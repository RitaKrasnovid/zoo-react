import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import SectionLayout from "../../components/section-layout";
import { createNews, getNewsById, updateNews } from '../../store/actions';
import normalizeId from '../../helpers/convert-url-to-id';
import InputFile from './input-file';

import './news-form.scss';

let NewsForm = props => {
  const { handleSubmit, match, load, reset, updateNews, createNews, history } = props;
  const { params: { id } } = match;

  if(id) {
    load(id);
  }

  const saveOrUpdate = async (data) => {
    let result;
    if(id) {
      result = await updateNews(data);
    } else {
      result = await createNews(data);
    }

    if(result) {
      history.push('/news');
    }
  };

  const resetData = () => {
    reset();
    history.push('/news');
  };

  const cancelButton =
    (<button type="button" className="news-form__button--cancel" onClick={resetData}>
      Cancel
    </button>);

  const showCancelButton = id ? cancelButton : null;

    return (
      <div className="news-form">
        <SectionLayout>
        <header className="news-form__header">News Form</header>
          <form className="news-form__form" onSubmit={handleSubmit(val => saveOrUpdate(val))}>
            <label className="news-form__label">
              Title
              <Field
                component="input"
                type="text"
                name="title"
                className="news-form__input"
              />
            </label>

            <label className="news-form__label">
              Description:
              <Field
                component="textarea"
                name="description"
                className="news-form__textarea"
              />
            </label>

            <label className="news-form__label">
              Video link (copy link from youtybe)
              <Field
                component="input"
                name="videoId"
                className="news-form__input"
                normalize={normalizeId}
              />
            </label>

            <label className="news-form__label">
              Upload news Images
              <Field
                component={InputFile}
                name="file"
                className="news-form__input"
              />
            </label>

            <button
              type="submit"
              className="news-form__button--save"
            >
              Save
            </button>
            {showCancelButton}
          </form>
        </SectionLayout>
      </div>
    );
}

NewsForm = reduxForm({
  form: 'newsForm',
  enableReinitialize : true,
})(NewsForm)

NewsForm = connect(
  state => ({
    initialValues: state.news.getNewsById,
  }),
  {
    load: getNewsById,
    createNews,
    updateNews,
  },
)(NewsForm)

export default NewsForm;
