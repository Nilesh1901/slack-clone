import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignUpCardProp {
  setState: (state: SignInFlow) => void;
}

function SignUpCard({ setState }: SignUpCardProp) {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email our another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className=" space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            type="email"
            onChange={() => {}}
            placeholder="Email"
            value=""
            required
          />
          <Input
            disabled={false}
            type="password"
            onChange={() => {}}
            placeholder="Password"
            value=""
            required
          />
          <Input
            disabled={false}
            type="password"
            onChange={() => {}}
            placeholder="Confirm password"
            value=""
            required
          />
          <Button type="submit" className="w-full" size={"lg"}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className=" w-full relative"
          >
            <FcGoogle className=" size-5 absolute left-4" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className=" w-full relative"
          >
            <FaGithub className=" size-5 absolute left-4" />
            Continue with GitHub
          </Button>
        </div>
        <p className=" text-xs text-muted-foreground">
          Allready have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

export default SignUpCard;
