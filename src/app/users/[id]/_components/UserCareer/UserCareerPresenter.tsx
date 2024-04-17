import { UserCareerGroup } from "@/lib/api";
import { Divider } from "antd";

type Props = {
  userId: number;
  careerGroups: UserCareerGroup[];
};

const UserCareerPresenter = async ({ userId, careerGroups }: Props) => {
  return (
    <>
      {careerGroups.map((careerGroup, idx) => (
        <div key={idx} style={{ padding: "8px 4px" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            {careerGroup.label}
          </div>
          <div>
            {careerGroup.careers?.map((career, idx) => (
              <div key={idx} style={{ padding: "4px 8px" }}>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {career.name}
                </div>
                <div>
                  {career.from?.year}/{career.from?.month} - {career.to?.year}/
                  {career.to?.month}
                </div>
                <div style={{ marginBottom: "8px" }}>
                  {career.description?.map((item) => <div>{item}</div>)}
                </div>
                <div style={{ marginBottom: "8px" }}>
                  {career.tasks?.map((task, idx) => (
                    <div key={idx}>
                      <div style={{ fontWeight: "bold" }}>{task.name}</div>
                      <div>
                        {task.description?.map((item) => <div>{item}</div>)}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {career.skillGroups?.map((skillGroup, idx) => (
                    <div key={idx} style={{ marginBottom: "8px" }}>
                      <div style={{ fontWeight: "bold" }}>
                        {skillGroup.label}
                      </div>
                      <div>
                        {skillGroup.skills?.map((skill, idx) => (
                          <div key={idx}>
                            [ID:{skill.skill?.id}] {skill.skill?.name} (
                            {skill.skill?.url})
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default UserCareerPresenter;
