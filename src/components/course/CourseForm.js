import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors,  onChange, onSave,  errors, loading}) =>{
    return(
        <form method="post">
            <h1>Add New Course</h1>
            <TextInput
            name="title"
            value={course.title}
            label="Enter Title"
            onChange={onChange}
            error={errors.title}
             />

             <SelectInput
             name="authorId"
             label="Enter Label Name"
             defaultOptions="Select Author"
             value={course.authorId}
             options= {allAuthors}
            onChange={onChange}
            error={errors.authorId}
              />

                <TextInput
            name="category"
            value={course.category}
            label="Enter Category"
            onChange={onChange}
            error={errors.category}
             />


                <TextInput
            name="length"
            value={course.length}
            label="Enter length"
            onChange={onChange}
            error={errors.length}
             />

             <input type="submit"
             disabled={loading}
             value={loading ? "saving" : "save"}
             className="btn btn-primary"
             onClick={onSave} />





        </form>

    );


};
CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange:  React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object


};

export default CourseForm;