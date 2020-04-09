import React from "react"
import '../style/_base.scss'

const More = () => {
    return (
        <div class="container">
            <div className="row prgcicle">
                <div class="col-sm-3">
                    <div class="progress" data-percentage="20">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                            <div>
                                1yr<br></br>
                                <span>Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="progress" data-percentage="40">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                            <div>
                                5 +<br></br>
                                <span>Projects</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="progress" data-percentage="80">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                            <div>
                                7+<br></br>
                                <span>Certificate</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default More
