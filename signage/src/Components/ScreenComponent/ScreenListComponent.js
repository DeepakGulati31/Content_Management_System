import React from "react";

function ScreenListComponent() {
    return (
        <div>
            <div className="container-fluid content-top-gap">
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb my-breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Screen List
                        </li>
                    </ol>
                </nav>

                <div className="accordions">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="card card_border">
                                <div className="card-header chart-grid__header">
                                    Screen List
                                </div>
                                <div className="card-body">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header " id="headingOne">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="text"
                                                            className="form-control input-style"
                                                            placeholder="Search by name..."
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <select className="form-control input-style">
                                                            <option value="Name_asc">Name (A-Z)</option>
                                                            <option value="Name_desc">Name (Z-A)</option>
                                                            <option value="CreatedAt_asc">
                                                                Created At (Oldest)
                                                            </option>
                                                            <option value="CreatedAt_desc">
                                                                Created At (Newest)
                                                            </option>
                                                            <option value="UpdatedAt_asc">
                                                                Updated At (Oldest)
                                                            </option>
                                                            <option value="UpdatedAt_desc">
                                                                Updated At (Newest)
                                                            </option>
                                                            <option value="CreatedBy_asc">
                                                                Created By (A-Z)
                                                            </option>
                                                            <option value="CreatedBy_desc">
                                                                Created By (Z-A)
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* {loading ? (
                                            <div className="text-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        ) : ( */}
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>SNo.</th>
                                                    <th>Screen Name</th>
                                                    <th>Location</th>
                                                    <th>Mac AddressId</th>
                                                    <th>IP Address</th>
                                                    <th>Device Status</th>
                                                    <th>Current Layout</th>
                                                    <th>isActive</th>
                                                    <th>Created Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>SNo.</td>
                                                    <td>Screen Name</td>
                                                    <td>Location</td>
                                                    <td>Mac AddressId</td>
                                                    <td>IP Address</td>
                                                    <td>Device Status</td>
                                                    <td>Current Layout</td>
                                                    <td>isActive</td>
                                                    <td>Created Date</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* )} */}
                                        {/* <div className='text-center'>
                                            <button className='btn btn-sm btn-primary' onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
                                                Previous
                                            </button>
                                            &nbsp;
                                            <span>Page {pageNumber} of {totalPages}</span>
                                            &nbsp;
                                            <button className='btn btn-primary' onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === totalPages}>
                                                Next
                                            </button>
                                        </div> */}
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

export default ScreenListComponent;
