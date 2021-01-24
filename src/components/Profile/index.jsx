import "./profile.sass";
import { Card } from './../common/Card';
import IconButton from '@material-ui/core/IconButton';
import {Delete, Edit} from '@material-ui/icons';

const renderHistory = () => {
    return (
        <div className="hist-item">
            <div className="hist-title">Curso HTML</div>
            <div className="hist-desc">Description f dsf sd f  wef wf we fwe f wef we fw ef wf we g treh gf nh gfdh tred gh fdsegwer g erw gtyr4we gyh rwehb ert</div>
        </div>
    );
}

export const Profile = () => {
    return (
        <main id="profile">
            <div className="profile-head section">
                <div className="image-container">
                    <img src="/profile.jpg" alt="" />
                    <div style={{ flexBasis: "100%", margin: "auto" }}>
                        <IconButton aria-label="delete" style={{ margin: "0px 15px" }}>
                            <Delete fontSize="large" />
                        </IconButton>
                        <IconButton aria-label="edit" style={{ margin: "0px 15px" }}>
                            <Edit fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <div className="head-data">
                    <div>Agustín García</div>
                    <div>a.garcia@gmail.com</div>
                </div>
            </div>
            <div className="profile-body section">
                <div className="section-title">
                    <h2>Courses</h2>
                </div>
                <div id="ecards" className="ecards">
                    <Card />
                    <Card />
                    <Card />
                    {/* <div className="break"></div> */}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="profile-education section">
                <div className="section-title">
                    <h2>Education</h2>
                </div>
                <div className="list-education">

                    {[1, 2, 3, 4, 5, 6].map(renderHistory)}
                </div>
            </div>
            <div className="profile-work section">
                <div className="section-title">
                    <h2>Education</h2>
                </div>
                <div className="list-work">

                    {[1, 2, 3, 4, 5, 6].map(renderHistory)}
                </div>
            </div>
        </main>
    );
};