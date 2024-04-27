import { useEffect, useState } from 'react'
import API from '../utils/api-client';
import Projects from '../components/Projects';
import { Alert } from 'react-native';

const ProjectList = () => {
    
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getProjects = async () => {
            setIsLoading(true)
            try {
                const result = await API.get('projects/joined');
                setProjects(result.data.projects)
                Alert.alert('Success', 'Projects fetched!');
            } catch (error) {
                Alert.alert('Error', error?.response?.data?.message ?? 'Something went wrong');
            } finally {
                setIsLoading(false)
            }
        }

        getProjects();
    }, [])

    return (
        <Projects isLoading={isLoading} projects={projects} />
    );
};

export default ProjectList;
