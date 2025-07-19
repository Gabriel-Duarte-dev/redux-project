import {
  CardActions,
  CardHeader,
  CardShape,
} from "../UserList/UserList.styled";
import * as S from "./CardSkeleton.styled";

export function CardSkeleton() {
  return (
    <CardShape>
      <CardHeader>
        <S.SkeletonAvatar />
        <div style={{ flex: 1 }}>
          <S.SkeletonText style={{ width: "60%" }} />
          <S.SkeletonText style={{ width: "80%" }} />
        </div>
      </CardHeader>
      <S.SkeletonText style={{ width: "50%", marginBottom: "16px" }} />
      <CardActions>
        <S.SkeletonText style={{ width: "120px", height: "32px" }} />
        <S.SkeletonText style={{ width: "180px", height: "32px" }} />
      </CardActions>
    </CardShape>
  );
}
