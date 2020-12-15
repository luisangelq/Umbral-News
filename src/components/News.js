import PropTypes from "prop-types";

const News = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            View Complete News
          </a>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default News;
