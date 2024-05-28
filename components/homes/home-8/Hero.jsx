import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section banner-home8">
      <div className="box-banner-homepage-8">
        <div
          className="box-cover-image boxBgImage"
          style={{
            backgroundImage:
              "url(assets/imgs/page/homepage8/header-banner.png)",
          }}
        >
          <div className="container-sub">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="heading-52-medium color-white mb-10 wow fadeInUp">
                  Fast, Safe, Reliable
                  <br className="d-none d-lg-block" />
                  Cab Service
                </h2>
                <p className="color-white text-16 wow fadeInUp">
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla
                  <br className="d-none d-lg-block" />
                  suscipit. Maecenas ultrices.
                </p>
                <div className="mt-30 wow fadeInUp">
                  <Link className="btn btn-white-big" href="#our-fleet">
                    View Our Fleet
                    <svg
                      className="icon-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="box-search-ride box-search-ride-style-2 box-search-ride-style-4 wow fadeInUp">
                  <div className="box-search-tabs light-input">
                    <div className="head-tabs">
                      <ul
                        className="nav nav-tabs nav-tabs-search"
                        role="tablist"
                      >
                        <li>
                          <a
                            className="active"
                            href="#tab-distance"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="tab-distance"
                            aria-selected="true"
                          >
                            Local Transfer
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tab-hourly"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="tab-hourly"
                            aria-selected="false"
                          >
                            Hourly
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tab-rate"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="tab-rate"
                            aria-selected="false"
                          >
                            Outstation
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="tab-distance"
                        role="tabpanel"
                        aria-labelledby="tab-distance"
                      >
                        <div className="box-form-search">
                          <div className="search-item search-date">
                            <div className="search-icon">
                              <span className="item-icon icon-date"> </span>
                            </div>
                            <div className="search-inputs ">
                              {/* <label className="text-14 color-grey">Date</label> */}
                              <DatePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-time">
                            <div className="search-icon">
                              <span className="item-icon icon-time"> </span>
                            </div>
                            <div className="search-inputs">
                              <label className="text-14 color-grey">Time</label>
                              <TimePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-from">
                            <div className="search-icon">
                              <span className="item-icon icon-from"> </span>
                            </div>
                            <div className="search-inputs">
                              {/* <label className="text-14 color-grey">From</label> */}
                              {/* <PlacePicker /> */}
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="From"
                              />
                            </div>
                          </div>
                          <div className="search-item search-to">
                            <div className="search-icon">
                              <span className="item-icon icon-to"> </span>
                            </div>
                            <div className="search-inputs">
                              {/* <label className="text-14 color-grey">To</label> */}
                              {/* <PlacePicker /> */}
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="To"
                              />
                            </div>
                          </div>
                          <div className="search-item search-button mb-0 d-flex gap-4">
                            <a
                              href="tel:+919316516448"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Call
                              </button>
                            </a>
                            <a
                              href="https://wa.me/+919316516448"
                              target="_blank"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Whatsapp
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-hourly"
                        role="tabpanel"
                        aria-labelledby="tab-hourly"
                      >
                        <div className="box-form-search">
                          <div className="search-item search-time">
                            <div className="search-icon">
                              <span className="item-icon icon-time"> </span>
                            </div>
                            <div className="search-inputs ">
                              <label className="text-14 color-grey">Time</label>
                              <TimePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-date">
                            <div className="search-icon">
                              <span className="item-icon icon-date"> </span>
                            </div>
                            <div className="search-inputs ">
                              <label className="text-14 color-grey">Date</label>
                              <DatePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-from">
                            <div className="search-icon">
                              <span className="item-icon icon-from"> </span>
                            </div>
                            <div className="search-inputs">
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="From"
                              />
                            </div>
                          </div>
                          <div className="search-item search-to">
                            <div className="search-icon">
                              <span className="item-icon icon-time"> </span>
                            </div>
                            <div className="search-inputs">
                              {/* <label className="text-14 color-grey">To</label> */}
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="Number Of Hour"
                              />
                            </div>
                          </div>
                          <div className="search-item search-button mb-0 d-flex gap-4">
                            <a
                              href="tel:+919316516448"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Call
                              </button>
                            </a>
                            <a
                              href="https://wa.me/+919316516448"
                              target="_blank"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Whatsapp
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-rate"
                        role="tabpanel"
                        aria-labelledby="tab-rate"
                      >
                        <div className="box-form-search">
                          <div className="search-item search-date">
                            <div className="search-icon">
                              <span className="item-icon icon-date"> </span>
                            </div>
                            <div className="search-inputs ">
                              <label className="text-14 color-grey">Date</label>
                              <DatePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-time">
                            <div className="search-icon">
                              <span className="item-icon icon-time"> </span>
                            </div>
                            <div className="search-inputs ">
                              <label className="text-14 color-grey">Time</label>
                              <TimePickerComponent />
                            </div>
                          </div>
                          <div className="search-item search-from">
                            <div className="search-icon">
                              <span className="item-icon icon-from"> </span>
                            </div>
                            <div className="search-inputs">
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="Form"
                              />
                            </div>
                          </div>
                          <div className="search-item search-to">
                            <div className="search-icon">
                              <span className="item-icon icon-to"> </span>
                            </div>
                            <div className="search-inputs">
                              <input
                                type="text"
                                className="border-0 bg-transparent w-100"
                                placeholder="To"
                              />
                            </div>
                          </div>
                          <div className="search-item search-button mb-0 d-flex gap-4">
                            <a
                              href="tel:+919316516448"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Call
                              </button>
                            </a>
                            <a
                              href="https://wa.me/+919316516448"
                              target="_blank"
                              className="text-white h-100 w-100"
                            >
                              <button className="btn btn-search" type="submit">
                                Whatsapp
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
