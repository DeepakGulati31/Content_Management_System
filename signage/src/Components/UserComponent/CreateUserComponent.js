import React, { useState, useEffect } from "react";
import Service from "../../Services/service";
import { toast } from "react-toastify";
import { CreateUserHooks } from "../../Helper/UsersHelper";
import { CreateUserRole } from "../../Helper/UsersHelper";
import { isEmailRegistered } from "../../Helper/UsersHelper";
import { useNavigate } from "react-router-dom";
import { UserGetbyIdhooks } from "../../Helper/UsersHelper";
function CreateUserCompnent(props) {
    const navigate=useNavigate();
    const [roles, setRoles] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        userId: props.id,
        firstName: "",
        lastName: "",
        email: "",
        passwordHash: "",
        username: "",
        roleId: 0,
    });

    async function fetchRole() {
        const data = await CreateUserRole();
        if (data !== undefined) {
            setRoles(data);
        }
    }
    
    //Edit User
    async function getData() {
        const data = await UserGetbyIdhooks(props.id);
        if (data !== undefined) {
            setFormData((prevData) => ({
                ...prevData,
                ...data,
                roleId: data.roleId || '' 
            }));
            setIsEditing(true);
        }
    }

    const userEmail = async (email) => {
        const data = await isEmailRegistered(email);
        console.log(data);
        if (data !== undefined) {
            if (data.id !== 0) {
                toast.error("Email already registered", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            }
        console.log(data);
        debugger;
    }

    useEffect(() => {
        fetchRole();
        if(props.id !== undefined){
            getData();
        }
    }, []);

    const handleRole = (e) => {
        setFormData({ ...formData, roleId: e.target.value });
    }

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        console.log(formData);
        var res;
        res= await CreateUserHooks(formData);
        if (res !== undefined) {
            toast.success(
                props.id===undefined?
                "User Created Successfully":
                "User Edited Successfully"
                , {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            if (props.id === undefined) {
                setFormData({
                    userId: 0,
                    firstName: "",
                    lastName: "",
                    email: "",
                    passwordHash: "",
                    username: "",
                    roleId: 0,
                });
            }
        } 
            else {

            toast.error("Failed to create User. Please try again!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setTimeout(() => {
           navigate("/UserList");
        }, 4000)
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/i;
            if (emailRegex.test(value)) {
                userEmail(value);
            } 
        }
    };
    return (
        <div>
            <div class="container-fluid content-top-gap">
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb my-breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            {props.id !== undefined ? "Edit User" : "Add User"}
                        </li>
                    </ol>
                </nav>

                <div class="accordions">
                    <div class="row">
                        <div class="col-lg-12 mb-4">
                            <div class="card card_border">
                                <div class="card-header chart-grid__header">
                                    {props.id !== undefined ? "Edit User" : "Add User"}
                                </div>
                                <div class="card-body">
                                    <div class="accordion" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header " id="headingOne">
                                                <form onSubmit={handleSubmit}>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="firstName" class="input__label">
                                                                First Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control input-style"
                                                                id="firstName"
                                                                name="firstName"
                                                                placeholder="First Name"
                                                                onChange={handleChange}
                                                                value={formData.firstName}
                                                                required
                                                            />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="lastName" class="input__label">
                                                                Last Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control input-style"
                                                                id="lastName"
                                                                name="lastName"
                                                                placeholder="Last Name"
                                                                onChange={handleChange}
                                                                value={formData.lastName}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputEmail4" class="input__label">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                class="form-control input-style"
                                                                id="inputEmail4"
                                                                placeholder="Email"
                                                                onChange={handleChange}
                                                                name="email"
                                                                value={formData.email}
                                                                required
                                                            />
                                                        </div>
                                                        {
                                                             props.id === undefined ? 
                                                             <div class="form-group col-md-6">
                                                            <label for="inputPassword4" class="input__label">
                                                                Password
                                                            </label>
                                                            <input 
                                                                type="password"
                                                               
                                                                class="form-control input-style"
                                                                id="inputPassword4"
                                                                name="passwordHash"
                                                                placeholder="Password"
                                                                // value=  {props.id !== undefined ? "******" : ""}
                                                                value= {formData.passwordHash}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                             :
                                                              null
                                                             }
                                                        {/* <div class="form-group col-md-6">
                                                            <label for="inputPassword4" class="input__label">
                                                                Password
                                                            </label>
                                                            <input 
                                                                type="password"
                                                               
                                                                class="form-control input-style"
                                                                id="inputPassword4"
                                                                name="passwordHash"
                                                                placeholder="Password"
                                                                // value=  {props.id !== undefined ? "******" : ""}
                                                                value= {formData.passwordHash}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div> */}
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="username" class="input__label">
                                                            Username
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control input-style"
                                                            id="username"
                                                            name="username"
                                                            placeholder="Username"
                                                            onChange={handleChange}
                                                            value={formData.username}
                                                            required
                                                        />
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputRole" class="input__label">
                                                                Role
                                                            </label>
                                                            <select
                                                                id="inputRole"
                                                                class="form-control input-style"
                                                                value={formData.roleId}
                                                                onChange={(e) => {
                                                                    handleRole(e);
                                                                }}
                                                            >
                                                                <option selected>Choose Your Role</option>
                                                                {roles.map((role) => {
                                                                    return (
                                                                        <option key={role.id} value={role.id}>
                                                                            {role.roleName}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary btn-style mt-4"
                                                    >
                                                        {props.id!==undefined? "Edit User": "Add User"}
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
