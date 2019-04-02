import React, { PropTypes, props, context } from 'react';
import { connect } from 'react-redux';
import * as  courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import LoaderComponent from '../common/LoaderComponent';

class CoursePage extends React.Component {

    constructor() {
        super(props, context);
        this.state = {
            course: {
                title: "",
                authorId: ""
            },
            showAddCourse: false
        };

        this.deleteCourse = this.deleteCourse.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.addCourses = this.addCourses.bind(this);
        this.updateCourseshowSection = this.updateCourseshowSection.bind(this);

    }
    onAuthorChange(event) {
        const course = this.state.course;
        course.authorId = event.target.value;
        this.setState({ course: course });

    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });

    }
    updateCourseshowSection() {
        console.log("State beofre", this.state);
        this.setState({ showAddCourse: !this.state.showAddCourse });
        console.log("State after", this.state);

    }
    onClickSave() {
        if (this.state.course.title == "") {
            alert("Add Title");
            return;

        }
        if (this.state.course.authorId == "") {
            alert("Add Author");
            return;
        }
        this.props.dispatch(courseActions.createCourse(this.state.course));
        this.setState({
            course: {
                title: "",
                authorId: ""
            }
        });


    }
    addCourses() {
        alert("Add me ");

        this.context.router.push('/managecourse');
    }
    deleteCourse(course) {
        this.props.dispatch(courseActions.deleteCourse(course));



    }
    showAdd() {
        return (
            <div>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <br /> <br />
                <input type="text" onChange={this.onAuthorChange} value={this.state.course.authorId} />
                <br /><br />
                <input type="submit" value="Save" onClick={this.onClickSave} />
                {/*<a href="#" onClick={()=>this.deleteCourse("aa")} styleName={"display: inline-block"}>Delete</a>*/}
            </div>

        );
    }
    editCourse(course) {
    }
    courseRow(course, index) {


    }
    deleteAllCoursess() {
        this.props.dispatch(courseActions.deleteAllCourses());
    }
    render() {
        const { courses } = this.props;
        const { showAddCourse } = this.state;
        return (
            <div>
                <h1>Available Courses for Free !!!!!!</h1>
                <a href="#" className="btn btn-primary" onClick={() => this.deleteAllCoursess()}>Delete All</a>
                <a href="#" className="btn btn-success" onClick={() => this.addCourses()}>Add New Course</a>
                {/*{props.courses.map(this.courseRow,this)}*/}
                <CourseList courses={courses} />
                <button className="btn btn-primary" onClick={() => this.updateCourseshowSection()}> {showAddCourse ? 'Add Course' : 'Hide Course' } </button>
                <h2>{showAddCourse ? 'Show Course Form ' : 'Hide Course Form'}</h2>
                {showAddCourse ? this.showAdd() : null}
            </div>

        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };

}
CoursePage.contextTypes = {
    router: PropTypes.object

};

export default connect(mapStateToProps)(CoursePage);   