# AMIYA — A Boy & Girl Best-Friend Story

A responsive friendship-themed Java Maven WAR website, deployable on Tomcat 9.

## Sections
- AMIYA welcome screen with one boy and one girl best-friend illustration
- Friendship story and original Hinglish shayari
- Songs section with YouTube search/play links for the two requested tracks
- Friendship promise and surprise message

## Build
```bash
mvn clean package
```
Output: `target/amiya.war`

## Deploy
Copy `target/amiya.war` to Tomcat's `webapps` folder. Open:
`http://YOUR_TOMCAT_PUBLIC_IP:8080/amiya/`

## Jenkins
Before running the pipeline:
1. Replace `YOUR_GITHUB_REPOSITORY_URL` in `Jenkinsfile`.
2. Replace both occurrences of `YOUR_TOMCAT_PUBLIC_IP`.
3. Configure Jenkins tools named `Java21` and `Maven3`.
4. Add SSH private key credential with ID `tomcat-ssh`.
5. Ensure the SSH user can write the Tomcat `webapps` directory.

The music links open YouTube search results. The website does not include copyrighted audio files.
