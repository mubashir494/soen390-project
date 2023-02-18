import React, {useState} from "react";
import {
   FormControl,
   FormLabel,
   Input,
   Button,
   Stack,
   Box,
   Heading,
   Text,
   Textarea,
} from "@chakra-ui/react";
import Courses from "../Profile/Courses";
import {AddIcon, SmallAddIcon} from "@chakra-ui/icons";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {emailValidator} from "@/Util/Validator";

type Course = {
   institution?: string,
   start_year?: string,
   end_year?: string,
   description?: string,
   id?: number
}


const CoursesBox = () => {
   const profile = useSelector((state) => state as any);
   const [coursesList, setCoursesList] = useState(profile.auth.courses as Course[]);
   const deleteCourse = (id: number) => {
      setCoursesList(coursesList.filter((course: any) => course.id !== id))
   };
   const addCourse = () => {
      let course: Course = {};
      setCoursesList(oldArray => [...(oldArray || []), course]);
   }
   const isNew = (course: Course) => {
      return !(course.institution && course.start_year && course.end_year && course.description)
   }
   return (
         <Stack
            as="form"
            p={5}
            mb={5}
            style={{
               flexDirection: "column",
               flexWrap: "wrap",
               justifyContent: "center",
               alignContent: "center",
               alignItems: "center",
               alignSelf: "center",
               WebkitAlignContent: "center",
               WebkitAlignItems: "center",
               WebkitBoxAlign: "center",
               WebkitFlexWrap: "wrap",
               WebkitJustifyContent: "center",
            }}
            >
               <Text
                  style={{
                     alignSelf: "flex-start",
                     fontSize: "1.5rem",
                     fontWeight: "bold",
                  }}
               >
                  Courses
                  <Button
                     style={{
                        boxShadow: "0 5px 17px 0px rgba(0, 100, 500, 0.3)",
                        border: "3px solid rgba(255, 255, 255, 0.3)",
                        marginLeft: "15px",
                        marginBottom: "5px",
                      }}
                      type="button"
                      colorScheme={"teal"}
                      borderRadius="100px"
                     onClick={addCourse}
                  >
                     <AddIcon />
                  </Button>
               </Text>

               <div style={{ display: "flex", flexDirection: "column-reverse", width: "100%" }}>
                  {coursesList && coursesList.map((course: Course, index: number) => (
                     <div key= {course.id}>
                        <Courses course={course} index={index+1} deleteCourse={deleteCourse} isNew={isNew(course)}/>
                     </div>
                  ))}
               </div>

            </Stack>
         );
      };
export default CoursesBox;