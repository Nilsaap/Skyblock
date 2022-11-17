import type { PageLoad } from "./$types";

const hypixelApiURL = "https://api.hypixel.net";
const mojangApiURL = "https://api.ashcon.app/mojang/v2";
const hypixelApiKey = "b459115c-9a12-486a-9bed-80dca5b5e198";
const hypixelSkillUrl = "https://api.hypixel.net/resources/skyblock/skills";
let skillLevels: any[11];
let xpReqiurments: any[60] = [];

export const load: PageLoad = async ({ params, fetch }) => {
  //Gest the uuid of the player
  const mojangResp = await fetch(`${mojangApiURL}/user/${params.id}`);
  const mojangJson = await mojangResp.json();
  const uuid = mojangJson.uuid.replace(/-/g, "");

  //Main data api call
  const profileUrl = `${hypixelApiURL}/skyblock/profiles?uuid=${uuid}&key=${hypixelApiKey}`;
  const profileResp = await fetch(profileUrl);
  const json = await profileResp.json();

  //Selects the selected profile
  let selectedProfile;
  for (const profile of json.profiles) {
    if (profile.selected) {
      selectedProfile = profile;
      break;
    }
  }

  //Skill Data Api Call
  const skillResp = await fetch(hypixelSkillUrl);
  const skillJson = await skillResp.json();
  //Skill Exp to Level Calculation
  for(let i = 0; i < 50; i++) {
    xpReqiurments[i] = skillJson.skills.FARMING.levels[i].totalExpRequired;
  }
  for (let i = 0; i < 11; i++) {
    for(let j = 0; j < xpReqiurments.length || 50; j++){
      if(j = 0){
        if(selectedProfile.members[uuid].experience_skill_farming < xpReqiurments[j]){
          skillLevels[i] = j;
        }
        else{ break; }
      }
      /*
      else if(j = 1){
        if(selectedProfile.members[uuid].experience_skill_mining < xpReqiurments[j]){
          skillLevels[i] = j;
        }
      }
      else if(j = 2){
        if(selectedProfile.members[uuid].experience_skill_combat < xpReqiurments[j]){
          skillLevels[i] = j;
        }
      }      
      
      else if(j = 3){
        if(selectedProfile.members[uuid].experience_skill_foraging < xpReqiurments[j]){
          skillLevels[i] = j;
        }
      }
            
      else if(j = 4){
        if(selectedProfile.members[uuid].experience_skill_fishing < xpReqiurments[j]){
          skillLevels[i] = j;
        }
      }

      else if(j = 5){
        if(selectedProfile.members[uuid].experience_skill_enchanting < xpReqiurments[j]){
          skillLevels[i] = j;
        }
      }
      */
    }
  }
  const skillData: any[] = await skillLevels;
  
  return { uuid: uuid, profile: selectedProfile, skillData: skillData};
};

export const prerender = false;