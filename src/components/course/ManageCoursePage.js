import React, { PropTypes, props, context } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';



class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            update: true
        };
        this.onSave = this.onSave.bind(this);
        this.updateCourseState = this.updateCourseState.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log("ths.props", this.props);
        if (this.props.course) {
            if (this.props.course.id != nextProps.course.id) {
            } else {
                this.setState({ course: Object.assign({}, nextProps.course) });
            }
        }

    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });

    }
    onSave(event) {
        event.preventDefault();
        //  this.props.dispatch(courseActions.saveCOurse(this.state.course));
        // this.props.actions.saveCOurse(this.state.course);
        // if (this.props.params.id) {
        //     this.props.actions.updateCourse(this.state.course).then(()=> this.redirect());

        // } else {
        //     this.props.actions.createCourse(this.state.course).then(() => this.redirect());


        // }
        let author = {
            firstName: 'Manideep ',
            lastName: "Mittal"
        };

        // this.props.actions.authorActions.addAuthor(author);  /* if new author needs to be added.  */
        this.props.actions.courseActions.saveCOurse(this.state.course, this.props.params.id).then(() => this.redirect());
    }
    redirect() {
        this.context.router.push('/course');


    }
    render() {
        return (
            <div>
                <div>Manage Course Page... </div>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    course={this.state.course}
                    errors={this.state.errors}
                    onSave={this.onSave} />
            </div>

        );
    }


}
ManageCoursePage.contextTypes = {
    router: PropTypes.object

};
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getCourseById(courses, courseId) {
    const course = courses.filter(course => course.id == courseId);
    if (course) {
        return course[0];
    } else {
        return null;
    }

}
function mapStateToProps(state, ownProps) {
    let courseId = ownProps.params.id;
    // if(courseId) this.setState({courseUpdate: true});
    let courseUpdate = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    const authorsFormatedDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName

        };

    });
    courseUpdate = getCourseById(state.courses, courseId);
    if (courseUpdate == null) {
        courseUpdate = state.course;
    }
    return {
        course: courseUpdate,
        authors: authorsFormatedDropDown
    };

}
function mapDispatchToProps(dispatch) {


    return {
        actions: {
            courseActions: bindActionCreators(courseActions, dispatch),
            authorActions: bindActionCreators(authorActions, dispatch)

        }
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);