import { useCallback, useState } from "react";

const Booking = () => {
    const [isInstallmentEnabled, setIsInstallmentEnabled] = useState(false);

    const handleInstallmentCheckboxChange = useCallback(() => {
        setIsInstallmentEnabled(!isInstallmentEnabled);
    }, [isInstallmentEnabled]);

    const handleProceedButtonClick = useCallback(() => {
    }, []);

    return (
        <div className="booking">
            <div className="kindly-share-a-few-more-detail-parent">
                <b className="kindly-share-a">Kindly share a few more details</b>
                <div className="please-fill-in">
                    Please fill in the details to confirm your order
                </div>
            </div>
            <div className="modal-parent">
                <div className="modal">
                    <div className="header">
                        <div className="header1">
                            <div className="top">
                                <b className="title">Transaction Detail</b>
                            </div>
                        </div>
                        <div className="divider" />
                    </div>
                    <div className="main-contents">
                        <div className="consumer">
                            <div className="divider" />
                        </div>
                        <div className="consumer">
                            <div className="list">
                                <div className="charges">Product List</div>
                                <div className="product">
                                    <div className="item-1">
                                        <div className="title1">Birthday Bash</div>
                                        <b className="desc">$2,000</b>
                                    </div>
                                    <div className="item-1">
                                        <div className="title1">Eric Prydz DJ Set (1x)</div>
                                        <b className="desc">$2,000</b>
                                    </div>
                                    <div className="item-1">
                                        <div className="title1">Eric Prydz DJ Set (1x)</div>
                                        <b className="desc">$2,000</b>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                        </div>
                        <div className="consumer">
                            <div className="list">
                                <div className="charges">Charges</div>
                                <div className="product">
                                    <div className="header1">
                                        <div className="item-1">
                                            <div className="title1">Tax</div>
                                            <b className="desc">$1,000</b>
                                        </div>
                                    </div>
                                    <div className="header1">
                                        <div className="item-1">
                                            <div className="title1">other Charges</div>
                                            <b className="desc">$1,000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                        </div>
                        <div className="amount">
                            <div className="title6">
                                <div className="total-amount">Total Amount</div>
                                <b className="b">$2,000</b>
                            </div>
                            <div className="divider" />
                        </div>
                        <div className="consumer">
                            <div className="list">
                                <div className="charges">Schedule</div>
                                <div className="product">
                                    <div className="header1">
                                        <div className="item-1">
                                            <div className="title1">Due on 26/7/2024</div>
                                            <b className="desc">$1,000</b>
                                        </div>
                                    </div>
                                    <div className="header1">
                                        <div className="item-1">
                                            <div className="title1">Due on 28/7/2024</div>
                                            <b className="desc">$1,000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                        </div>
                        <div className="status">
                            <div className="charges">Status</div>
                            <div className="label">
                                <div className="label1">Pending</div>
                            </div>
                        </div>
                    </div>
                    <div className="terms-privacy">
                        {/* <div className="selection" /> */}
                        <input type="checkbox" />
                        <div className="i-agree-to-container">
                            <span>{`I Agree to the `}</span>
                            <span className="term-conditions">{`Term & Conditions`}</span>
                            <span>{` and `}</span>
                            <span className="term-conditions">Privacy Policy</span>
                        </div>
                    </div>
                    <div className="button3">
                        <img className="base-icon2" alt="" src="/base2.svg" />
                        <button type="submit"className="button4"  >Proceed</button>
                    </div>

                </div>
                <div className="form-parent">
                    <div className="form">
                        <div className="text">Payment Details</div>
                        <div className="content">
                            <div className="form1">
                                <div className="row">
                                    <div className="input-field">
                                        <div className="input-field-base">
                                            <div className="input-field-base">
                                                <div className="label2">Name on card</div>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-field1">
                                        <div className="input-field-base">
                                            <div className="input-field-base">
                                                <div className="label2">Expiry</div>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="mm/yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field">
                                        <div className="input-field-base">
                                            <div className="input-field-base">
                                                <div className="label2">Card number</div>
                                                <input

                                                    className="input"
                                                    type="text"
                                                    placeholder="1234 1234 1234 1234"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-field1">
                                        <div className="input-field-base">
                                            <div className="input-field-base">
                                                <div className="label2">CVV</div>
                                                <img
                                                    className="mail-icon"
                                                    alt=""
                                                    src="/mail2.svg"
                                                />
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="•••"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="shipping-insurance">
                            <div className="create-payment-schedule">
                                Create Payment Schedule
                            </div>
                            <div className="radio-button">
                                <div className="active">
                                    <input
                                        type="checkbox"
                                        id="installmentCheckbox"
                                        checked={isInstallmentEnabled}
                                        onChange={handleInstallmentCheckboxChange}
                                    />
                                    <label htmlFor="installmentCheckbox" className="i-agree-to-container">
                                        Enable Installment Payment
                                    </label>
                                </div>
                            </div>
                            <button
                                className={`base-icon2 ${isInstallmentEnabled ? "enabled" : "disabled"}`}
                                onClick={handleProceedButtonClick}
                                disabled={!isInstallmentEnabled}
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                    <div className="form2">
                        <div className="text5">Contact Information</div>
                        <div className="body">
                            <div className="form3">
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">First  Name</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="input"
                                    />
                                </div>
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Last Name</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="form3">
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Email</div>
                                    </div>
                                    <input
                                        type="email"
                                        className="input"
                                    />
                                </div>
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Phone</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="label6">
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Address</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="form3">
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Country</div>
                                    </div>
                                    <select className="input" >
                                        <option value="Select">Select</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>

                                </div>
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">State</div>
                                    </div>
                                    <select className="input">
                                        <option value="Select">Select</option>
                                        <option value="New York">New York</option>
                                        <option value="California">California</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form3">
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">City</div>
                                    </div>
                                    <select className="input">
                                        <option>Select</option>
                                        <option value="New York">New York</option>
                                        <option value="California">California</option>
                                    </select>
                                </div>
                                <div className="text-field">
                                    <div className="label6">
                                        <div className="first-name">Zip</div>
                                    </div>
                                    <div className="typing-area">
                                        <input
                                            type="text"
                                            className="input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="logo-container">
                        <div className="logo">
                            <img
                                className="screenshot-2023-03-19-at-1247"
                                alt=""
                                src="/screenshot-20230319-at-1247-1@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
