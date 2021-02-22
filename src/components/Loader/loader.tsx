
import React from 'react'
import './loading.css'
const Loader = () => {
    return (
        <div >
            <div className="loader">
                <div className="load_base load1">
                    <div className="load_base out_loader"></div>
                </div>
                <div className="load_base load2">
                    <div className="load_base in_loader in_loader1"></div>
                    <div className="load_base in_loader in_loader2"></div>
                    <div className="load_base in_loader in_loader3"></div>
                    <div className="load_base in_loader in_loader4"></div>
                </div>
            </div>
            <div className="background">
            </div>
        </div>
    )
}

export default Loader