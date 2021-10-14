/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  DoctTypography,
  DoctContainer,
  DoctCol,
  DoctRow,
} from "@doct-react/core";
import MainImg from "./Image/Img.JPG";
import "./Details.scss";

function Details() {
  return (
    <div>
      <section className="section_body">
        <DoctTypography variant="h2" className="text-grey-800 heading">
          Our Counselor
        </DoctTypography>

        <DoctContainer>
          <DoctRow>
            <DoctCol sm="3" className="offset-1">
              <img src={MainImg} className="img-fluid counsellers_img" />
            </DoctCol>
            {/* <div className="section_box"> */}
            <DoctCol sm="5" >
              <div className="section_content">
                <DoctTypography variant="h4" className="text-grey-800">
                  Dr. Sandip Patel
                  <br />
                </DoctTypography>

                <DoctTypography variant="subtitle1">
                  MBBS, MBA Health
                </DoctTypography>

                <DoctTypography variant="subtitle1" className="text-grey-600" >
                  He has gotten academic qualifications of MBBS from M. P. Shah
                  Government Medical College – Jamnagar, MBA from the University
                  of Wales (UK), PGDMLS from Symbiosis Institute of Health
                  Science – Pune.  After an experience of 5+ years in the
                  healthcare management industry, he decided to establish Career
                  Counselling firm pertaining to healthcare.
                </DoctTypography>
              </div>
            </DoctCol>
            {/* </div> */}
          </DoctRow>
        </DoctContainer>
      </section>
    </div>
  );
}

export default Details;
