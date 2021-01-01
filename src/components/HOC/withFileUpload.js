import React from "react"

function withFileUpload(WrappedComponent){
    return class withFileComponent extends React.Component{

        constructor(props){
            super(props)

            this.state = {files: []}
            this.fileReader = new FileReader()
        }

        addFiles(e){
            const files = e.target.files
            this.fileReader.readAsDataURL(files[0])
        }


        appendFile(){
            this.setState({
                files : [...this.state.files, this.fileReader.result]
            })
        }

        componentDidMount(){
            this.fileReader.addEventListener('load', )
        }
    }
}

export default withFileUpload