import Button from "./Button";

const JoinTeamBanner = () => {
  return (
    <div className="bg-soket-blue text-white rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-white flex-shrink-0 md:mt-0 md:self-auto mt-2 self-baseline"></div>
            <h3 className="text-base text-left">
              Join the laboratory: Researchers, systems engineers, and institutions 
            </h3>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-transparent flex-shrink-0"></div>
            <p className="text-white opacity-60 text-base text-left">
              Let us know if you have any questions.
            </p>
          </div>
        </div>
        <Button href="/careers/jobs" variant="white" borderTopColor="#1B41FF">
          VIEW OPEN ROLES
        </Button>
      </div>
    </div>
  );
};

export default JoinTeamBanner;
