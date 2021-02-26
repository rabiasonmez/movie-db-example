import React from "react";

const Contact = props => {
  return (
    <section className="contact_page pt-120 pb-120">
      <div className="container">
        <div className="contact_map">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="contact_form mt-30">
              <div className="contact_title">
                <h5 className="title">Send Message Us </h5>
              </div>
              <form id="contact-form" action="" method="post">
                <div className="contact_form_wrapper">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_form">
                        <input type="text" name="name" placeholder="Name" />
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_form">
                        <input type="email" name="email" placeholder="Email" />
                        <i className="fas fa-envelope" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_form">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                        <i className="far fa-i-cursor" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_form">
                        <textarea name="message" placeholder="Message" />
                        <i className="fas fa-edit" />
                      </div>
                    </div>
                    <p className="form-message" />
                    <div className="col-md-12">
                      <div className="single_form">
                        <button className="main-btn">Sand Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_info">
              <div className="contact_title mt-30">
                <h5 className="title">Get In Touch</h5>
              </div>
              <p>
                Lorem Ipsum Is simply dummy text of the printing and typesetting
                Industry. Lorem Ipsum has been the Industry's
              </p>

              <div className="single_info d-flex">
                <div className="info_icon">
                  <i className="far fa-map" />
                </div>
                <div className="info_content media-body">
                  <p>
                    Level 13, 2 Ellzabeth St, Lorem Ipsum Is simply dummy text
                  </p>
                </div>
              </div>
              <div className="single_info d-flex">
                <div className="info_icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="info_content media-body">
                  <p>+88 0123456789</p>
                  <p>+88 0123456789</p>
                </div>
              </div>
              <div className="single_info d-flex">
                <div className="info_icon">
                  <i className="fas fa-envelope-open-text" />
                </div>
                <div className="info_content media-body">
                  <p>info@classified.com</p>
                  <p>info.classified@gmail..com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
