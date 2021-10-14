/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  DoctTypography,
  DoctContainer,
  DoctCol,
  DoctRow,
  DoctButton,
} from "@doct-react/core";
import "./Modal.scss";
import Image from "../../img-2.jpg";

function Modal() {
  return (
    <div>
      <DoctContainer>
        <div className="modal_body" xl="1">
          <DoctRow className="py-2">
            <DoctCol xl="6">
              <div className="modal_img_box m-3">
                <img src={Image} className="modal_image" />
              </div>
            </DoctCol>

            <DoctCol>
              <div className="modal_content">
                <DoctTypography variant="h5" className="font-weight-regular">
                  Get assistance for
                </DoctTypography>
                <DoctTypography variant="h3">
                  NEET UG/PG <br /> Career Counselling
                </DoctTypography>
                ________
                <DoctTypography variant="h5" className="font-weight-regular">
                  Our Counselor
                </DoctTypography>
                <DoctTypography variant="h3">Dr. Sandip Patel</DoctTypography>
                <div className="modal_cta">
                  <DoctButton
                    type="primary"
                    variant="contained"
                    text="Explore More"
                  />
                </div>
              </div>
            </DoctCol>
          </DoctRow>
        </div>
      </DoctContainer>
    </div>
  );
}

export default Modal;
