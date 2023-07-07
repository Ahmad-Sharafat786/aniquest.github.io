import React from "react";
import { IMAGES } from "../../assets/images";
import Dropdown from "react-bootstrap/Dropdown";

export function Notification() {
  // const [show, setShow] = useState(false)
  return (
    <Dropdown className="main-drop-down-notification notificationList notify">
      <Dropdown.Toggle
        className="custom-grey-button dropdown-toggle nav-link dropdown_bell"
        id="dropdown-custom-components"
      >
        <img
          src={IMAGES.NOTIFICATION_ICON}
          className="img-fluid me-2"
          alt="notification-icon"
        />
        {/* <img src={IMAGES.NOTIFICATION_ICON} onClick={() => { setShow(true) }} className="img-fluid me-2" alt="notification-icon" /> */}
      </Dropdown.Toggle>
      {/* <Dropdown.Menu className="notification-list p-0" show={show}>
                <div
                    className="notification_title"
                >
                    <h3>Notifications</h3>
                    <h4 onClick={() => { setShow(false) }}>See All</h4>
                </div>
                {NotificationList?.map((item, index) => {
                    return (
                        <Dropdown.Item
                            href="#"
                            className="notification-message d-block"
                            key={index}
                            onClick={() => { setShow(false) }}
                        >
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <span className="avatar avatar-lg">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User"
                                            src={item.img}
                                        />
                                    </span>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9 media_body">
                                    <div className="notifi_name">
                                        <h4>
                                            {item.name}
                                        </h4>
                                        <p>
                                            {item.time}
                                        </p>
                                    </div>
                                    <p className="noti-details">
                                        {item.info}
                                    </p>
                                    {/* <span className="noti-sent-by">
                                        Sent by:  {item.sentBy}
                                    </span> */}
      {/* </div>
                            </div>
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu> */}
    </Dropdown>
  );
}

// const NotificationList = [
//     {
//         img: IMAGES.PROFILELOGO,
//         name: "Collin Pazdzior",
//         info: "In publishing and graphic",
//         sentBy: "Collin Pazidior",
//         time: "Today 06:12 PM",
//         status: true,
//     },
//     {
//         img: IMAGES.PROFILELOGO,
//         name: "Collin Pazdzior",
//         info: "In publishing and graphic",
//         sentBy: "Collin Pazidior",
//         time: "Today 06:12 PM",
//         status: true,
//     },
//     {
//         img: IMAGES.PROFILELOGO,
//         name: "Reminder",
//         info: "In publishing and graphic",
//         sentBy: "Collin Pazidior",
//         time: "Today 06:12 PM",
//         status: true,
//     },
// ]
