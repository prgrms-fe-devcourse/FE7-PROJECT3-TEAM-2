export default function WelcomeHeader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs">HOONSU</span>
      <span className="text-4xl font-bold">인증 메일 전송완료</span>
      <span className="text-center text-base text-gray-400">
        입력하신 메일 주소로 인증 주소를 보냈어요! <br />
        인증 완료 후 훈수를 시작해보세요!
      </span>
    </div>
  );
}
