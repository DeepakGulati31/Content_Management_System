import React, { useState, useEffect } from "react";
// import Service from "../../Services/service";
// import { toast } from "react-toastify";
// import { CreateUserHooks, CreateUserRole, isEmailRegistered, UserGetbyIdhooks } from "../../Helper/UsersHelper";
// import { useNavigate } from "react-router-dom";
// import { Audio } from 'react-loader-spinner';
import { CreateScreenLayout } from "../../Helper/ScreenHelper";
function CreateUserCompnent(props) {
const [layouts, setLayouts] = useState([]);
async function fetchLayout() {
    const data = await CreateScreenLayout();
    if (data !== undefined) {
        setLayouts(data.items);
    }
}
useEffect(() => {
    fetchLayout();
});


    return (
        <div>
                <div className="container-fluid content-top-gap">
                    <nav aria-label="breadcrumb" className="mb-4">
                        <ol className="breadcrumb my-breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {props.id !== undefined ? "Edit User" : "Add Screen"}
                            </li>
                        </ol>
                    </nav>

                    <div className="accordions">
                        <div className="row">
                            <div className="col-lg-12 mb-4">
                                <div className="card card_border">
                                    <div className="card-header chart-grid__header">
                                        {props.id !== undefined ? "Edit User" : "Add Screen"}
                                    </div>
                                    <div className="card-body">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-header " id="headingOne">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="screenName" className="input__label">
                                                                    Screen Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-style"
                                                                    id="screenName"
                                                                    name="screenName"
                                                                    placeholder="Screen Name"
                                                                    // onChange={handleChange}
                                                                    // value={formData.firstName}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="location" className="input__label">
                                                                    Location
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-style"
                                                                    id="location"
                                                                    name="location"
                                                                    placeholder="Location"
                                                                    // onChange={handleChange}
                                                                    // value={formData.lastName}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="macAddress" className="input__label">
                                                                    Mac AddressId
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-style"
                                                                    id="macAddress"
                                                                    placeholder="Mac Address"
                                                                    // name="email"
                                                                    // onChange={handleChange}
                                                                    // value={formData.email}
                                                                    required
                                                                />
                                                            </div>
                                                            {/* {props.id === undefined && ( */}
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="ipAddress" className="input__label">
                                                                        IP Address
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control input-style"
                                                                        id="ipAddress"
                                                                        name="ipAddress"
                                                                        placeholder="IPAddresss"
                                                                        // value={formData.passwordHash}
                                                                        // onChange={handleChange}
                                                                        required
                                                                    />
                                                                </div>
                                                            {/* )} */}
                                                        </div>
                                                        <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="" className="input__label">
                                                                Device Status
                                                            </label>
                                                            <select
                                                                id="Status"
                                                                name="status"
                                                                class="form-control input-style"
                                                                // value={formData.priority}
                                                                // onChange={handleChange}
                                                                required
                                                            >
                                                                <option>Select Status</option>
                                                                <option>Online</option>
                                                                <option>Offline</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label htmlFor="Layout" class="input__label">
                                                                Layout
                                                            </label>
                                                            <select
                                                                id="Layout"
                                                                name="layout"
                                                                class="form-control input-style"
                                                                // value={formData.layoutId}
                                                                // onChange={handleLayout}
                                                                required
                                                            >
                                                                <option value="">Select Layout</option>
                                                                {layouts.map((layout) => (
                                                                    <option
                                                                        key={layout.layoutId}
                                                                        value={layout.layoutId}
                                                                    >
                                                                        {layout.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        </div>
                                                       
                                                        {/* <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="inputRole" className="input__label">
                                                                    Role
                                                                </label>
                                                                <select
                                                                    id="inputRole"
                                                                    className="form-control input-style"
                                                                    value={formData.roleId}
                                                                    onChange={handleRole}
                                                                >
                                                                    <option value="">Choose Your Role</option>
                                                                    {roles.map((role) => (
                                                                        <option key={role.id} value={role.id}>
                                                                            {role.roleName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div> */}
                                                        {/* </div> */}

                                                        <button type="submit" className="btn btn-primary btn-style mt-4">
                                                            {props.id !== undefined ? "Edit User" : "Add User"}
                                                        </button>
                                                    </form>
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
    );
}

export default CreateUserCompnent;
