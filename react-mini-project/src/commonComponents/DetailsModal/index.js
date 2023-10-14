import * as React from "react";
import "./styles.scss";
import Modal from "@material-ui/core/Modal";
// import closeIcon from "../../img/model-close.svg";

// export interface ModalProps {
//   heading?: any;
//   onCloseModal: () => void;
//   open: boolean;
//   children: React.ReactElement;
//   className?: string;
//   modalWidth?: string;
//   modalHeight?: string;
//   modalMargin?: string;
//   modalTop?: string;
//   closeOnBackDrop?: boolean;
//   modalOverflow?: string;
//   modalClassName?: string;
//   modalHeaderClassName?: string;
//   closeIconClassName?: string;
//   "data-testid"?: string;
//   subheading?: string;
// }

const GenericModal = (props) => {
  return (
    <Modal
      open={props.open}
      className={`modal-container${
        props.modalClassName ? ` ${props?.modalClassName}` : ""
      }`}
      onClose={(e, reason) => {
        if (reason === "backdropClick" && props.closeOnBackDrop)
          props.onCloseModal();
      }}
      data-testid={props && props["data-testid"]}
    >
      <div
        className="modal-inner"
        style={{
          height: props.modalHeight,
          width: props.modalWidth,
          margin: props.modalMargin,
          top: props.modalTop,
          overflow: props.modalOverflow
        }}
      >
        <div
          className={`section-header ${
            props.modalHeaderClassName ? props.modalHeaderClassName : ""
          }`}
        >
          <div className="section-name">
            {props.heading}
            {props.subheading && (
              <div className="sub-header">{props.subheading}</div>
            )}
            {props.heading && <div className="heading-underline"></div>}
            <div
              alt="close-icon"
              className={`close-icon`}
              onClick={props.onCloseModal}
              aria-label="close-icon"
            >
              X
            </div>
          </div>
        </div>
        <div className={`modal-content  ${props.className}`}>
          {props.children}
        </div>
      </div>
    </Modal>
  );
};

export default GenericModal;
