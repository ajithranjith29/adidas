import Card from "./card";

export default function CardAll() {
  return (
    <>
      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/04_originals_ss25_the_original_introduce_catlp_tc_superstar_d_0cdbe78cd0.jpg"
        }
        title={"Superstar Originals"}
        description={"From court to street."}
        alt={"Superstar Originals"}
        link={"/superstar"}

      
      />
      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/02_originals_ss25_the_original_introduce_catlp_tc_samba_d_1cb1fa7a9f.jpg"
        }
        title={"Samba Originals"}
        description={"Inspiration Indiviuality in every step."}
        alt={"Samba Originals"}
        link={"/samba"}
      />
      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/01_originals_ss25_the_original_introduce_catlp_tc_gazelle_d_e61f3a2d99.jpg "
        }
        title={"Gazelle Originals"}
        description={"Moving strong over 70 years."}
        alt={"Gazelle Originals"}
        link={"/gazelle"}
      />
      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/05_originals_ss25_the_original_introduce_catlp_tc_sl_72_d_7348ac59c8.jpg"
        }
        title={"SL 72 Originals"}
        description={"The Cult classic for originals worldwide."}
        alt={"SL 72 Originals"}
        link={"/sl72"}
      />
      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/07_originals_ss25_the_original_introduce_catlp_tc_campus_d_0237f8c49b.jpg"
        }
        title={"Campus Originals"}
        description={"Low-key look , high-key style."}
        alt={"Campus Originals"}
        link={"/campus"}
      />

      <Card
        image={
          "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/08_originals_ss25_the_original_introduce_catlp_tc_forum_d_15a5c6de5e.jpg"
        }
        title={"Forum Originals"}
        description={"The 80s Basketball icon lives on."}
        alt={"Forum Originals"}
        link={"/forum"}
      />
    </>
  );
}
