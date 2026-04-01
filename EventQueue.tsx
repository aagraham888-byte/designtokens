import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, MapPin, Clock, Users, TrendingUp, Navigation } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function EventQueue() {
  const [inQueue, setInQueue] = useState(false);
  const [queuePosition, setQueuePosition] = useState(1247);
  const [totalInQueue, setTotalInQueue] = useState(5823);
  const [estimatedWait, setEstimatedWait] = useState(12);
  const [queueOption, setQueueOption] = useState<string | null>(null);
  const [timeUntilQueue, setTimeUntilQueue] = useState({
    hours: 2,
    minutes: 34,
    seconds: 45
  });

  // Countdown timer for waiting room
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilQueue((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate live queue updates
  useEffect(() => {
    if (!inQueue) return;

    const interval = setInterval(() => {
      setQueuePosition((prev) => Math.max(1, prev - Math.floor(Math.random() * 5)));
      setTotalInQueue((prev) => prev + Math.floor(Math.random() * 10 - 3));
      setEstimatedWait((prev) => Math.max(1, prev - 0.5));
    }, 3000);

    return () => clearInterval(interval);
  }, [inQueue]);

  const handleJoinQueue = (option: string) => {
    setQueueOption(option);
    setInQueue(true);
  };

  const handleExitQueue = () => {
    setInQueue(false);
    setQueueOption(null);
  };

  const progressPercentage = ((totalInQueue - queuePosition) / totalInQueue) * 100;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1a1d23] backdrop-blur-sm z-50 border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white hover:text-gray-300 flex items-center gap-2">
            <ArrowLeft className="size-5" />
            Back to Events
          </Link>
        </div>
      </nav>

      {/* Event Hero */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-500 text-xs rounded-full mb-4">
                ROCK
              </div>
              <h1 className="text-white text-5xl mb-4">Classic Rockers</h1>
              <div className="flex flex-col gap-2 text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="size-5" />
                  <span>Wed, Aug 20, 2025 · 7:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  <span>Staples Center, Los Angeles, CA</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg">
                Tickets from $95
              </Button>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763595226504-cc197dea1a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwdmVudWUlMjBleHRlcmlvciUyMG5pZ2h0fGVufDF8fHx8MTc3NDkyNjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Classic Rockers Event"
                className="size-full object-cover"
              />
            </div>
          </div>

          {/* Resale Notice */}
          <div className="mt-8 bg-[#24272e] border border-[#2a2d35] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="size-5 text-pink-500" />
              <span className="text-white">8 resale tickets available</span>
            </div>
            <span className="text-pink-500">Starting at $125</span>
          </div>
        </div>
      </div>

      {/* Queue Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#24272e] rounded-2xl p-8 border border-[#2a2d35]">
          <h2 className="text-white text-3xl mb-6">Join the Queue</h2>
          
          {!inQueue ? (
            <>
              {/* Countdown Timer */}
              <div className="bg-[#1a1d23] rounded-xl p-8 mb-8 border border-[#2a2d35] text-center">
                <h3 className="text-white text-xl mb-4">Queue Opens In</h3>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="text-white text-5xl mb-2 font-mono">
                      {String(timeUntilQueue.hours).padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm">Hours</div>
                  </div>
                  <div className="text-white text-5xl">:</div>
                  <div className="flex flex-col items-center">
                    <div className="text-white text-5xl mb-2 font-mono">
                      {String(timeUntilQueue.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm">Minutes</div>
                  </div>
                  <div className="text-white text-5xl">:</div>
                  <div className="flex flex-col items-center">
                    <div className="text-white text-5xl mb-2 font-mono">
                      {String(timeUntilQueue.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm">Seconds</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Get ready! The waiting room will open soon.
                </p>
              </div>

              <p className="text-gray-400 mb-8 text-lg">
                Choose how you want to join the waiting room
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => handleJoinQueue('solo')}
                  className="bg-[#2a2d35] hover:bg-[#2f3339] text-white p-6 rounded-lg text-left transition-colors border-2 border-transparent hover:border-pink-500"
                >
                  <h3 className="text-xl mb-2">Solo Queue</h3>
                  <p className="text-gray-400 text-sm">Join the waiting room by yourself</p>
                </button>

                <button
                  onClick={() => handleJoinQueue('friend')}
                  className="bg-[#2a2d35] hover:bg-[#2f3339] text-white p-6 rounded-lg text-left transition-colors border-2 border-transparent hover:border-blue-500"
                >
                  <h3 className="text-xl mb-2">Queue with a Friend</h3>
                  <p className="text-gray-400 text-sm">Invite a friend to join together</p>
                </button>
              </div>

              <div className="flex items-center justify-center pt-4">
                <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  <Users className="size-5" />
                  Join Watch Party Instead
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Live Queue Status */}
              <div className="bg-[#1a1d23] rounded-xl p-6 mb-6 border border-pink-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="size-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Live Queue Active</span>
                  </div>
                  <span className="text-gray-400 text-sm capitalize">{queueOption} Mode</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Your Position</div>
                    <div className="text-white text-3xl">#{queuePosition.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Total in Queue</div>
                    <div className="text-white text-3xl">{totalInQueue.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Estimated Wait</div>
                    <div className="text-white text-3xl">{estimatedWait.toFixed(0)} min</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Queue Progress</span>
                    <span className="text-pink-500 text-sm">{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="h-3 bg-[#2a2d35] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Live Updates */}
                <div className="bg-[#24272e] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="size-4 text-green-500" />
                    <span className="text-green-400 text-sm">Moving forward quickly!</span>
                  </div>
                  <div className="text-gray-400 text-xs space-y-1">
                    <div>• 234 people admitted in the last 5 minutes</div>
                    <div>• Average wait time decreased by 2 minutes</div>
                    <div>• You've moved up 48 positions</div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleExitQueue}
                className="w-full bg-[#2a2d35] hover:bg-[#2f3339] text-white rounded-lg py-3"
              >
                Exit Queue
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Venue Map & Directions */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#24272e] rounded-2xl overflow-hidden border border-[#2a2d35]">
          <div className="p-8 border-b border-[#2a2d35]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl mb-2">Venue Location</h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="size-5" />
                  <span>Staples Center, 1111 S Figueroa St, Los Angeles, CA 90015</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 flex items-center gap-2">
                <Navigation className="size-5" />
                Get Directions
              </Button>
            </div>
          </div>
          
          {/* Map Container */}
          <div className="relative h-96 bg-[#2a2d35]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6537287785967!2d-118.26940492345449!3d34.04298181885595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b84f1a0ca1%3A0xd59db0c74ba168e!2sCrypto.com%20Arena!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            />
          </div>

          {/* Venue Info */}
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-pink-500 mb-2">
                <MapPin className="size-8 mx-auto" />
              </div>
              <h3 className="text-white mb-1">Parking Available</h3>
              <p className="text-gray-400 text-sm">$30 - Reserved spots nearby</p>
            </div>
            <div className="text-center">
              <div className="text-pink-500 mb-2">
                <Clock className="size-8 mx-auto" />
              </div>
              <h3 className="text-white mb-1">Doors Open</h3>
              <p className="text-gray-400 text-sm">6:30 PM - Arrive early</p>
            </div>
            <div className="text-center">
              <div className="text-pink-500 mb-2">
                <Users className="size-8 mx-auto" />
              </div>
              <h3 className="text-white mb-1">Capacity</h3>
              <p className="text-gray-400 text-sm">20,000 attendees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}