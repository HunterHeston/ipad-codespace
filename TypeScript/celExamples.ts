
enum UserType {
    HUMAN = "human",
    MACHINE = "machine"
}

type User = {
    name: string;
    namespace: string;
    type: UserType;
}

type SpannerWriterGroupType = {
    users: User[]
}

const SpannerWriterGroup = new Array<User>()

SpannerWriterGroup.push({
    name: "hunter",
    namespace: "prod",
    type: UserType.HUMAN,
})


const AssessmentResult = SpannerWriterGroup.all(user, user.type != UserType.HUMAN)