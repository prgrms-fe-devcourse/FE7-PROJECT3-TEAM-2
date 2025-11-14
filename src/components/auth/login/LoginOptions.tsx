export default function LoginOptions() {
  return (
    <div className="flex flex-col items-center gap-2 text-sm font-medium text-gray-400">
      <div className="flex gap-2">
        <span>계정이 기억나지 않으신가요?</span>
        <a href="" className="text-gray-950 dark:text-gray-100">
          이메일 찾기
        </a>
        <a href="" className="text-gray-950 dark:text-gray-100">
          비밀번호 찾기
        </a>
      </div>
      <div className="flex gap-2">
        <span>아직 계정이 없으신가요?</span>
        <a href="/join" className="text-gray-950 dark:text-gray-100">
          이메일로 회원가입
        </a>
      </div>
    </div>
  );
}
