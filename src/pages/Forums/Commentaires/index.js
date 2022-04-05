import React from "react";
import "./index.css";
import "../bootstrap.min.css";

function index() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-body">
                <strong>Sujet:</strong>{" "}
                <span className="font-weight-normal"> Le port 8080 est déjà utilisé </span>
                <hr />
                <p>
                  Voici le l&apos;erreur que je rencontre quand je lance mon projet Spring Boot.
                  Puis-je avoir de l&apos;aide.
                </p>
              </div>
            </div>
            <div className="question-card card mb-4">
              <div className="card-header forum-card-img-30 d-flex justify-content-between">
                <p className="pt-2 mb-0">
                  <img
                    src="https://secure.gravatar.com/avatar/62c9c125499e280d7f96a75e939f3046?s=96&d=mm&r=g"
                    alt=""
                    className="rounded-circle mr-2"
                  />
                  <strong>
                    <a href="https://mdbootstrap.com/profile/?id=35406">Frédéric Z.</a>
                  </strong>
                  <span className="badge blue mx-1">pro</span> Il y a 4 jours
                </p>
                <div>
                  <a
                    href="http://cool.co"
                    type="button"
                    className="btn btn-outline-dark-green btn-sm px-2 waves-effect show_login"
                  >
                    <span className="value">8</span>
                    <i className="far fa-thumbs-up ml-1">&nbsp;</i>
                  </a>
                  <a
                    href="http://cool.co"
                    type="button"
                    className="btn btn-outline-danger btn-sm px-2 waves-effect show_login"
                  >
                    <span className="value">1</span>
                    <i className="far fa-thumbs-down ml-1">&nbsp;</i>
                  </a>
                </div>
              </div>

              <div className="card-body">
                <p>
                  Sur quel système d&apos;exploitation êtes-vous? Il vous suffit d&apos;arrêter le
                  service TomCat qui travaille par défaut.
                </p>
                <hr />
                <div className="comment-card ml-5">
                  <div className="form-group mb-0">
                    <a
                      href="http://cool.co"
                      className="btn btn-info btn-sm ml-0 comment-form-toggle show_login"
                    >
                      Ajouter un commentaire
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="answer-card card mb-4">
              <div className="card-header forum-card-img-30 d-flex justify-content-between">
                <p className="pt-2 mb-0">
                  <img
                    src="https://secure.gravatar.com/avatar/4cf642822dc5caf650facd79b8f64a95?s=96&d=mm&r=g"
                    alt=""
                    className="rounded-circle mr-2"
                  />
                  <strong>
                    <a href="https://mdbootstrap.com/profile/?id=15082">Marta Szymanska</a>
                  </strong>
                  <span className="badge purple mx-1">staff</span>
                  <span className="badge blue mx-1">pro</span>
                  <span className="badge amber mx-1">premium</span>Répondu, il y a 3 jours
                </p>
                <div>
                  <a
                    href="http://cool.co"
                    type="button"
                    className="btn btn-outline-dark-green btn-sm px-2 waves-effect show_login"
                  >
                    <span className="value">4</span>
                    <i className="far fa-thumbs-up ml-1">&nbsp;</i>
                  </a>
                  <a
                    href="http://cool.co"
                    type="button"
                    className="btn btn-outline-danger btn-sm px-2 waves-effect show_login"
                  >
                    <span className="value">0</span>
                    <i className="far fa-thumbs-down ml-1">&nbsp;</i>
                  </a>
                  <a
                    href="http://cool.co"
                    type="button"
                    className="btn btn-outline-primary btn-sm px-2 waves-effect is-hidden"
                  >
                    Meilleur réponse<i className="fas fa-check ml-1">&nbsp;</i>
                  </a>
                </div>
              </div>

              <div className="card-body">
                <pre>
                  Salut! Sur Linux, il suffit de faire &quot;sudo kill -15 numero_de_service&quot;,
                  et le numéro de service s&apos;obtient à travers la commande sudo lsof -n -i :8080
                  |grep LISTEN;
                </pre>
                <hr />
                <div className="comment-card ml-5">
                  <div className="form-group mb-0">
                    <a
                      href="http://cool.co"
                      className="btn btn-info btn-sm ml-0 comment-form-toggle show_login"
                    >
                      AJouter un commentaire
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-warning" role="alert">
              <h4>Closed</h4>
              <hr />
              Sujet clos
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
