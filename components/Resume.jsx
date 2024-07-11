import React, { useState } from "react";
import {
  Text,
  Document,
  Page,
  View,
  PDFViewer,
  StyleSheet,
  Link,
  Font,
  Svg,
  Image,
  Line,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const Rezume = ({ resume }) => {
  const [rezume, setRezume] = useState(resume);

  Font.register({
    family: "PTserif",
    fonts: [
      {
        src: "/fonts/PTSerif-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "/fonts/PTSerif-Bold.ttf",
        fontWeight: 700,
      },
      {
        src: "/fonts/PTSerif-Italic.ttf",
        fontWeight: "normal",
        fontStyle: "italic",
      },
    ],
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: "20px",
      fontFamily: "PTserif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
    },
    name: {
      fontWeight: "700",
      fontSize: "25px",
    },
    headerArea: {
      fontSize: "10px",
      marginTop: "-50px",
    },
    link: {
      color: "black",
    },
    heading: {
      fontWeight: "400",
      fontSize: "13px",
      marginBottom: "2px",
      marginTop: "7px",
    },
    sections: {
      marginLeft: "15px",
      marginRight: "15px",
    },
    section: {
      marginBottom: "5px",
    },
    innerHead: {
      padding: "2px 10px 1px 10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    innerHead1: {
      fontSize: "12px",
      fontWeight: "800",
    },
    innerHead2: {
      fontSize: "11px",
      fontStyle: "italic",
    },
    point: {
      display: "flex",
      flexDirection: "row",
      fontSize: "10px",
      padding: "2px 20px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
    projectTitle: {
      display: "flex",
      flexDirection: "row",
    },
    skill: {
      display: "flex",
      flexDirection: "row",
      padding: "2px 10px 1px 10px",
    },
    pointsArea: {
      marginTop: "5px",
    },
    AcheivementPoint: {
      display: "flex",
      flexDirection: "row",
      fontSize: "11px",
      padding: "2px 10px 1px 10px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
    introductionSection: {
      marginBottom: "15px",
    },
    introductionText: {
      fontSize: "13px",
      marginBottom: "5px",
    },
    designationText: {
      fontSize: "13px",
      fontWeight: "bold",
    },
    profileImage: {
      width: "90px",
      height: "90px",
      borderRadius: "10%",
      marginRight: "10px",
      objectFit: "cover",
      display: "absolute",
      left: "-210px",
      top: "-35px",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {rezume.personal.lastName && rezume.personal.firstName && (
            <Text style={styles.name}>
              {rezume.personal.firstName + " " + rezume.personal.lastName}
            </Text>
          )}
          {rezume.personal.profile && (
            <Image src={rezume.personal.profile} style={styles.profileImage} />
          )}
          <Text style={styles.headerArea}>
            {rezume.socialProfiles.phone + " "}|
            {" " + rezume.socialProfiles.email + " "}
            {"|" + " "}
            <Link style={styles.link} src={rezume.socialProfiles.linkedin}>
              linkedin
            </Link>{" "}
            {"|" + " "}
            <Link style={styles.link} src={rezume.socialProfiles.github}>
              github
            </Link>
          </Text>
        </View>

        {rezume.personal.introduction && rezume.personal.designation && (
          <View style={styles.sections}>
            <Text style={styles.heading}>Introduction</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1.5}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              {rezume.personal.designation && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>
                    {rezume.personal.designation}
                  </Text>
                </View>
              )}
              {rezume.personal.introduction && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead2}>
                    {rezume.personal.introduction}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Education Section */}
        {rezume.education.length > 0 &&
          rezume.education.some(
            (edu) => edu.college || edu.location || edu.title || edu.duration
          ) && (
            <View style={styles.sections}>
              <Text style={styles.heading}>Education</Text>
              <Svg height="2" width="530">
                <Line
                  x1="900"
                  y1="0"
                  x2="0"
                  y2="0"
                  strokeWidth={1.5}
                  stroke="black"
                />
              </Svg>
              {rezume.education.map(
                (edu, index) =>
                  (edu.college ||
                    edu.location ||
                    edu.title ||
                    edu.duration) && (
                    <View style={styles.section} key={index}>
                      <View style={styles.innerHead}>
                        <Text style={styles.innerHead1}>{edu.college}</Text>
                        <Text style={styles.innerHead2}>{edu.location}</Text>
                      </View>
                      <View style={styles.innerHead}>
                        <Text style={styles.innerHead2}>{edu.title}</Text>
                        <Text style={styles.innerHead2}>{edu.duration}</Text>
                      </View>
                    </View>
                  )
              )}
            </View>
          )}

        {/* Experience Section */}
        {rezume.experience.length > 0 &&
          rezume.experience.some(
            (exp) =>
              exp.designation ||
              exp.duration ||
              exp.company_Name ||
              exp.location
          ) && (
            <View style={styles.sections}>
              <Text style={styles.heading}>Experience</Text>
              <Svg height="2" width="530">
                <Line
                  x1="900"
                  y1="0"
                  x2="0"
                  y2="0"
                  strokeWidth={1.5}
                  stroke="black"
                />
              </Svg>
              {rezume.experience.map(
                (exp, index) =>
                  (exp.designation ||
                    exp.duration ||
                    exp.company_Name ||
                    exp.location) && (
                    <View style={styles.section} key={index}>
                      <View style={styles.innerHead}>
                        <Text style={styles.innerHead1}>{exp.designation}</Text>
                        <Text style={styles.innerHead2}>{exp.duration}</Text>
                      </View>
                      <View style={styles.innerHead}>
                        <Text style={styles.innerHead2}>
                          {exp.company_Name}
                        </Text>
                        <Text style={styles.innerHead2}>{exp.location}</Text>
                      </View>
                      <View style={styles.points}>
                        {exp.description1 && (
                          <View style={styles.point}>
                            <Text>•</Text>
                            <Text>{exp.description1}</Text>
                          </View>
                        )}
                        {exp.description2 && (
                          <View style={styles.point}>
                            <Text>•</Text>
                            <Text>{exp.description2}</Text>
                          </View>
                        )}
                        {exp.description3 && (
                          <View style={styles.point}>
                            <Text>•</Text>
                            <Text>{exp.description3}</Text>
                          </View>
                        )}
                      </View>
                    </View>
                  )
              )}
            </View>
          )}

        {/* Projects Section */}
        {rezume.project.length > 0 &&
          rezume.project.some(
            (proj) =>
              proj.title ||
              proj.techStacks ||
              proj.deployedLink ||
              proj.githubLink ||
              proj.description
          ) && (
            <View style={styles.sections}>
              <Text style={styles.heading}>Projects</Text>
              <Svg height="2" width="530">
                <Line
                  x1="900"
                  y1="0"
                  x2="0"
                  y2="0"
                  strokeWidth={1.5}
                  stroke="black"
                />
              </Svg>
              {rezume.project.map(
                (proj, index) =>
                  (proj.title ||
                    proj.techStacks ||
                    proj.deployedLink ||
                    proj.githubLink ||
                    proj.description) && (
                    <View style={styles.section} key={index}>
                      <View style={styles.innerHead}>
                        <View style={styles.projectTitle}>
                          <Text style={styles.innerHead1}>
                            {proj.title + "  "}
                          </Text>
                          <Text style={styles.innerHead2}>
                            {"|" + "  "}
                            {proj.techStacks + "  "}
                          </Text>
                          <Text style={styles.innerHead2}>
                            {"|" + "  "}
                            {proj.githubLink && (
                              <Link style={styles.link} src={proj.githubLink}>
                                Source Code
                              </Link>
                            )}
                          </Text>
                        </View>
                        <Text style={styles.innerHead2}>
                          {proj.deployedLink && (
                            <Link style={styles.link} src={proj.deployedLink}>
                              Deployed Link
                            </Link>
                          )}
                        </Text>
                      </View>
                      <View style={styles.points}>
                        {proj.description && (
                          <View style={styles.point}>
                            <Text>•</Text>
                            <Text>{proj.description}</Text>
                          </View>
                        )}
                      </View>
                    </View>
                  )
              )}
            </View>
          )}

        {/* Skills Section */}
        {(rezume.skills.programming_technical_skills ||
          rezume.skills.software_proficiency ||
          rezume.skills.interests_others_skills ||
          rezume.skills.language_soft_skills ||
          rezume.skills.business_administrative_skills) && (
          <View style={styles.sections}>
            <Text style={styles.heading}>Technical Skills</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1.5}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              {rezume.skills.programming_technical_skills && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>
                    Programming and Technical Skills:{" "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.skills.programming_technical_skills}
                  </Text>
                </View>
              )}
              {rezume.skills.software_proficiency && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>Software Proficiency: </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.skills.software_proficiency}
                  </Text>
                </View>
              )}
              {rezume.skills.interests_others_skills && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>
                    Interests and Other Skills:{" "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.skills.interests_others_skills}
                  </Text>
                </View>
              )}
              {rezume.skills.language_soft_skills && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>
                    Language and Soft Skills:{" "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.skills.language_soft_skills}
                  </Text>
                </View>
              )}
              {rezume.skills.business_administrative_skills && (
                <View style={styles.skill}>
                  <Text style={styles.innerHead1}>
                    Business and Administrative Skills:{" "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.skills.business_administrative_skills}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Achievements Section */}
        {(rezume.achievement.achievement1 ||
          rezume.achievement.achievement2 ||
          rezume.achievement.achievement3 ||
          rezume.achievement.achievement4 ||
          rezume.achievement.achievement5 ||
          rezume.achievement.achievement6) && (
          <View style={styles.sections}>
            <Text style={styles.heading}>Achievements</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1.5}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.pointsArea}>
                {rezume.achievement.achievement1 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement1}</Text>
                  </View>
                )}
                {rezume.achievement.achievement2 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement2}</Text>
                  </View>
                )}
                {rezume.achievement.achievement3 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement3}</Text>
                  </View>
                )}
                {rezume.achievement.achievement4 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement4}</Text>
                  </View>
                )}
                {rezume.achievement.achievement5 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement5}</Text>
                  </View>
                )}
                {rezume.achievement.achievement6 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.achievement.achievement6}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default Rezume;
